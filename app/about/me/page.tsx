import Link from "next/link";

export default function Me() {
    return (
        <div>  
            <h1>Nikolai Pammer</h1>
            <p>This is me</p>
            <Link href="/about">Go back to About</Link>
        </div>
    )
}