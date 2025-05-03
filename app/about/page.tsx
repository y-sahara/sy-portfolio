import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A passionate developer focused on creating exceptional web experiences.
          </p>
        </header>

        {/* Profile Section */}
        <section className="grid gap-12 md:grid-cols-2 mb-16 md:mb-24">
          <div className="relative aspect-square md:aspect-auto w-full max-w-sm mx-auto md:mx-0 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Hello, I'm John Doe</h2>
            <p className="text-muted-foreground mb-6">
              I'm a full-stack developer with over 5 years of experience building web applications. 
              I specialize in React, Next.js, and Node.js, and I'm passionate about creating 
              user-friendly interfaces and scalable backend solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development started in 2018, and since then, I've worked 
              on a variety of projects, from small business websites to complex web applications. 
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Twitter className="h-4 w-4" /> Twitter
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:email@example.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>React.js</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Next.js</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Tailwind CSS</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '95%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>TypeScript</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Node.js</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Express.js</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>MongoDB</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>PostgreSQL</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Other Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>UI/UX Design</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>DevOps</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '65%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Project Management</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Testing</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Fill out the form and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message" rows={5} />
                    </div>
                    <Button className="w-full" type="submit">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Linkedin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/johndoe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Github className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold">GitHub</h3>
                      <p className="text-sm text-muted-foreground">github.com/johndoe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Twitter className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold">Twitter</h3>
                      <p className="text-sm text-muted-foreground">twitter.com/johndoe</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Currently Available For</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Freelance Projects
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Technical Consultation
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Remote Full-time Opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}