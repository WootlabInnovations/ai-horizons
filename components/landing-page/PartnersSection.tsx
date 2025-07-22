'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnersSection() {
  const partners = [
    { name: 'Google', logo: '/partner/google.svg' },
    { name: 'Amazon', logo: '/partner/amazon.svg' },
    { name: 'Microsoft', logo: '/partner/microsoft.svg' },
    { name: 'Meta', logo: '/partner/meta.svg' },
    { name: 'IBM', logo: '/partner/ibm.svg' },
    { name: 'Adobe', logo: '/partner/adobe.svg' },
  ];

  return (
    <section id='partner' className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">Our Industry Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from and connect with leading companies at the forefront of AI innovation
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="w-full flex items-center justify-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={40}
                className="object-contain max-h-20"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            Our graduates have been hired by these and many other leading technology companies
          </p>
        </motion.div>
      </div>
    </section>
  );
}