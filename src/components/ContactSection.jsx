import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary"> Touch</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi obcaecati illo. Quibusdam amet iste voluptatum quia, assumenda harum hic architecto neque odit nam velit ratione ipsam obcaecati quidem ipsum?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact</h3>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:akipatel1781@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">akipatel1781@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+17063135870" className="text-muted-foreground hover:text-primary transition-colors">+1 (706) 313-5870</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">Atlanta, GA, USA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/* right column placeholder (form or additional info) */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection