import Link from "next/link";

export default function About() {
    return (
        <div>  
            <h1>Hello</h1>
            <p>World</p>
            <Link href="/about/me">Nikolai Pammer</Link>
            <Link href="/">Go back home</Link>
        </div>
    )
}