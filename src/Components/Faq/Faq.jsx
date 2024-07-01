'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaPlus } from "react-icons/fa6";

const acordianItems = [
    {
        title: 'Who is eligible for this program?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'What is the duration of the program?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'Do I get the assured placement?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'What is the basic academic percentage required to enroll for the course?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'What is the execution plan of the program?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'Can we take this course online?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'I am already employed, will I be eligible for the program?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'What If I miss the session due to an emergency?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'Can we take this course online?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'Do you provide any certificate after the program?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    },
    {
        title: 'Have suggestions for us?',
        details: 'Any Degree/Btech BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program'
    }
]

const Faq = () => {
    return (
        <div>
            <Accordion variant="bordered">

                {
                    acordianItems?.map((item, indx) => {
                        return <AccordionItem key={indx} aria-label={`Accordion ${indx + 1}`} showDivider={true} disableIndicatorAnimation={false} indicator={<FaPlus className="text-[#F98149]"/>} title={item?.title}>
                            <p className="py-1 px-2 ml-5 border-l-2 border-[#F98149]">{item?.details}</p>
                        </AccordionItem>
                    })
                }

            </Accordion>
        </div>
    );
};

export default Faq;