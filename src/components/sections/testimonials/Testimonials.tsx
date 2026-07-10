import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [

{
name:"John Banda",
role:"Business Owner",
message:"M Groups delivered an excellent ICT solution."

},

{

name:"Grace Phiri",
role:"Property Buyer",
message:"Buying land was simple and transparent."

},

{

name:"Peter Mbewe",
role:"Student",
message:"Their academy helped me gain practical skills."

}

];

export default function Testimonials(){

return(

<section className="bg-muted/30 py-24">

<div className="container mx-auto">

<div className="mb-16 text-center">

<h2 className="text-5xl font-bold">

What Clients Say

</h2>

</div>

<div className="grid gap-8 lg:grid-cols-3">

{TESTIMONIALS.map(testimonial=>(

<TestimonialCard

key={testimonial.name}

{...testimonial}

/>

))}

</div>

</div>

</section>

)

}