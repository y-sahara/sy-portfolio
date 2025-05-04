import Link from "next/link";
import { Github, Linkedin, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/y-sahara"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          {/* <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link> */}
          <Link
            href="https://x.com/sy_2123"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">X</span>
            <FaXTwitter className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Tech Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
