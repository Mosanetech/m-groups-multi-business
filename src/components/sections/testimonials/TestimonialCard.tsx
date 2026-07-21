interface Props{
    name:string;
    role:string;
    message:string;
}

export default function TestimonialCard({
    name,
    role,
    message,
}:Props){

    return(

        <div className="rounded-3xl border bg-card p-8">

            <p className="italic text-foreground/80">
                "{message}"
            </p>

            <h3 className="mt-6 font-bold">
                {name}
            </h3>

            <p className="text-sm text-primary">
                {role}
            </p>

        </div>

    )

}