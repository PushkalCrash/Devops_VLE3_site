import { motion, type Variants } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  align?: "left" | "right";
};

const ServicePreviewBlock = ({
  eyebrow,
  title,
  description,
  cta,
  href,
  image,
  align = "left",
}: Props) => {
  const isRight = align === "right";

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,           // Start transparent
      x: isRight ? 80 : -80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,           // End opaque
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0,           // No delay - instant response
      },
    },
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,         // Minimal delay
      },
    },
  };

  return (
    <div
      className={`
        grid md:grid-cols-2 gap-16 items-center
        ${isRight ? "md:[&>div:first-child]:order-2" : ""}
      `}
    >
  {/* IMAGE */}
          <a
            href={href}
            className={`block ${isRight ? "md:order-2" : ""}`}
          >
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="
                relative
                rounded-3xl
                overflow-hidden
                transition-all duration-500
                hover:shadow-[0_0_60px_hsl(var(--accent)/0.6)]
              "
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[380px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </a>

          {/* TEXT */}
          <motion.div
            className={isRight ? "md:order-1" : ""}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
        <p
          className="text-[hsl(var(--accent))] uppercase font-semibold mb-5"
          style={{
            fontSize: "1.2rem",
            letterSpacing: "0.1em",
          }}
        >
          {eyebrow}
        </p>


        <h2
          className="font-display text-white mt-4 mb-6"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            lineHeight: "1.05",
          }}
        >
          {title}
        </h2>
         <p
            className="text-white/90 mb-8 max-w-2xl"
            style={{
              fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
              lineHeight: "1.6",
            }}
         >
          {description}
         </p>

          <a
          href={href}
          className="inline-flex items-center gap-2 text-[hsl(var(--accent))] font-semibold group"
          >
          {cta}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default ServicePreviewBlock;