import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { H1, Text, H4 } from "@/components/ui/typography";
import data from "@/data/data.json";
import { AccessButton, AccessHub } from "../Access";

const Hero = () => {
  return (
    <section className="flex py-6 md:py-24 items-center">
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-baseline-last justify-between gap-12">
          <div className="md:col-span-2 col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <H4 className="text-md uppercase text-secondary-foreground">
                {data.hero.title.pre}
              </H4>
              <H1 className="text-5xl md:!text-8xl leading-[1.2]">
                {data.hero.title.main}
                <br />
                {data.hero.title.sub}
              </H1>
              <Text className="w-3/4 mt-4">{data.hero.title.description}</Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <AccessButton />
              <AccessHub />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="col-span-1"
          >
            <nav className="space-y-4 text-muted">
              {data.hero.navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <motion.span
                      className="h-[1px] w-8 bg-border group-hover:bg-primary transition-colors"
                      whileHover={{ width: 40 }}
                    />
                    {item.title}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>
      {/* <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] animate-pulse"
        )}
      /> */}
    </section>
  );
};

export default Hero;
