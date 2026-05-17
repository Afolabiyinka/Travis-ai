import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../libs/faqs";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";
const FAQs = () => {
  return (
    <motion.div

      className="w-full max-w-4xl mx-auto p-4 min-h-screen flex justify-center items-center flex-col gap-8"
    >
      <h1 className="capitalize md:text-4xl text-3xl mb-2">
        Frequently asked questions
      </h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AccordionItem
              value={`item-${index}`}
              defaultValue={faqs[0].question}

            >
              <AccordionTrigger
              >
                {item.question}
              </AccordionTrigger>

              <AccordionContent
              >
                <div
                //  className="px-6 pb-5 pt-3 leading-relaxed"
                >
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default FAQs;
