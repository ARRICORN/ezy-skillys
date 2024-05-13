import { Course } from "@/Models/Course";

export async function GET(req, { params }) {
  try {
    const courseID = params.courseID;
    const result = await Course.findById(courseID);
    if (!result) {
      throw new Error("Course not found!");
    }
    return Response.json({
      success: true,
      message: "Course details are retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Error during course retrieving", error);

    return Response.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

export async function PATCH(req, { params }) {
  try {
    const body = await req.json();
    if(!body) {
        throw new Error("No data given!");
    }
    const courseID = params.courseID;
    const course = await Course.findById(courseID);
    if (!course) {
      throw new Error("Course not found!");
    }

    // Updating the course details
    const result = await Course.findByIdAndUpdate(
      courseID,
      {
        ...body,
      },
      { new: true }
    );

    return Response.json({
      success: true,
      message: "Course details are updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Error during course retrieving", error);

    return Response.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    const courseID = params.courseID;
    const result = await Course.findByIdAndDelete(courseID);
    if (!result) {
      throw new Error("Course not found!");
    }
    return Response.json({
      success: true,
      message: "Course is deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Error during course deletion", error);

    return Response.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}
