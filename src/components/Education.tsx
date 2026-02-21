import { Card } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Education</h2>


      <Card className="p-6 h-full flex flex-col md:flex-row justify-between md:items-center">
       
        <div className="p-6 flex flex-col gap-2">
          <h4 className="font-medium text-lg">Algonquin College</h4>
          <p className="text-md text-foreground/70">
            Diploma in Mobile Application Design and Development
          </p>
          <p className="text-sm text-foreground/70">Sep 2023 – Apr 2025</p>
        </div>

        <div className="p-6">
            <img src="/college.png" alt="College Image" width={150} height={150} style={{borderRadius: "10px"}}/>
        </div>
      </Card>


    </div>
    </section>
  );
}
