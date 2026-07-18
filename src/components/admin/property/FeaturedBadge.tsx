export default function FeaturedBadge({
featured,
}:{
featured:boolean;
}){

if(!featured)
return <span>-</span>;

return(

<span className="rounded bg-yellow-100 px-3 py-1 text-yellow-700">

Featured

</span>

);

}