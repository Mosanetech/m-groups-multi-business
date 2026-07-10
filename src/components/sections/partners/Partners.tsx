const PARTNERS=[
"Partner One",
"Partner Two",
"Partner Three",
"Partner Four",
"Partner Five",
];

export default function Partners(){

return(

<section className="py-24">

<div className="container mx-auto">

<div className="mb-12 text-center">

<h2 className="text-4xl font-bold">

Trusted By

</h2>

</div>

<div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

{PARTNERS.map(partner=>(

<div

key={partner}

className="flex h-28 items-center justify-center rounded-2xl border bg-card font-semibold text-muted-foreground"

>

{partner}

</div>

))}

</div>

</div>

</section>

)

}