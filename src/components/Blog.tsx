import { motion } from '../lib/motion';
import { ArrowRight, FileText } from 'lucide-react';
import { blogPosts } from '../data';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="badge-dark mb-4">Recent Posts</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
              From the blog.
            </h2>
          </div>
          <a
            href="#blog"
            className="hidden md:flex font-display font-semibold text-sm text-primary items-center gap-1 hover:gap-2 transition-all"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.title}
              variants={cardVariants}
              className="glow-card bg-surface border border-border rounded-[10px] overflow-hidden flex flex-col group cursor-default"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-surface-raised to-surface border-b border-border flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary/30" strokeWidth={1.5} />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="badge-dark">{post.tag}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-display font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-display text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="font-display font-semibold text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
