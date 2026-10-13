import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiSass,
} from 'react-icons/si';
import { RiSeoLine } from 'react-icons/ri';
import { LuComputer, LuStamp } from 'react-icons/lu';
import { TbBrandAdobe, TbBrandVite, TbApi } from 'react-icons/tb';

const skillsRow1 = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'Sass', icon: SiSass },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Vite', icon: TbBrandVite },
  { name: 'Figma', icon: SiFigma },
  { name: 'UX/UI', icon: LuComputer },
];
const skillsRow2 = [
  { name: 'REST API', icon: TbApi },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Adobe', icon: TbBrandAdobe },
  { name: 'Branding', icon: LuStamp },
  { name: 'SEO', icon: RiSeoLine },
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-12 ml-8 mt-16 md:ml-16 md:mt-22 lg:ml-28 lg:mt-28 text-foreground"
    >
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <h2 className="uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap text-foreground">
          Skills
        </h2>
        <div className="flex flex-col gap-4 flex-1 min-w-0 overflow-hidden">
          <div className="flex w-max skills-scroll-left">
            <div className="flex gap-4 pr-4">
              {skillsRow1.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 w-28 h-28 md:w-30 md:h-36 lg:w-36 lg:h-36 shrink-0"
                  >
                    <Icon
                      aria-hidden="true"
                      className="md:w-18 md:h-18 w-12 h-12"
                    />
                    <span className="text-xs font-bold uppercase">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 pr-4" aria-hidden="true">
              {skillsRow1.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`duplicate-${skill.name}`}
                    className="flex flex-col items-center justify-center gap-2 w-28 h-28 md:w-30 md:h-36 lg:w-36 lg:h-36 shrink-0"
                  >
                    <Icon
                      aria-hidden="true"
                      className="md:w-18 md:h-18 w-12 h-12"
                    />
                    <span className="text-xs font-bold uppercase">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-max skills-scroll-right">
            <div className="flex gap-4 pr-4">
              {skillsRow2.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 w-28 h-28 md:p-6 md:w-30 md:h-36 lg:w-36 lg:h-36 shrink-0"
                  >
                    <Icon aria-hidden="true" className="text-6xl" />
                    <span className="text-xs font-bold uppercase">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 pr-4" aria-hidden="true">
              {skillsRow2.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`duplicate-${skill.name}`}
                    className="flex flex-col items-center justify-center gap-2 w-28 h-28 md:p-6 md:w-30 md:h-36 lg:w-36 lg:h-36 shrink-0"
                  >
                    <Icon aria-hidden="true" className="text-6xl" />
                    <span className="text-xs font-bold uppercase">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
