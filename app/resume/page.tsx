import { Footer } from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <article className="container max-w-4xl mx-auto px-6 py-12">
        {/* Resume Part */}
        <header className="mb-8 flex flex-col gap-1">
          <h1 className="text-4xl md:text-5xl text-primary tracking-tight">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground">January 5, 2026</p>
        </header>

        <div className="prose md:prose-base lg:prose-lg">
          <p>
            Welcome to my resume! It consits with two parts. The first part is
            my side-project, and the second part is my work experience.
          </p>
        </div>

        {/* Side Project Part */}
        <header className="my-8 flex flex-col gap-1">
          <h1 className="text-4xl md:text-5xl text-primary tracking-tight">
            Side Project
          </h1>
        </header>

        <div className="prose md:prose-base lg:prose-lg">
          <h2>Shopping Website</h2>
          <p>
            Built a responsive e-commerce website with Angular and TypeScript,
            using Angular Material for UI, Sass for styling, and Observables for
            reactive API data. Implemented product browsing, search, filtering,
            and cart.
          </p>

          <h2>POS Buddy</h2>
          <p>
            Developed a retail Point of Sale (POS) system focused on intuitive
            UX and efficient transactions. Implemented secure authentication
            with NextAuth.js and data management with Prisma ORM. Supported full
            CRUD for categories and products, along with business metrics
            tracking including sales, expenses, profit, and order volume.
          </p>

          <h2>Spark UP</h2>
          <p>
            Developed a full-stack e-commerce platform using Next.js and
            TypeScript with a responsive UI built using Tailwind CSS and
            shadcn/ui. Used Prisma and Supabase for database and backend
            services, integrated Stripe for secure payments, and built an admin
            panel to manage listings and transactions. Enabled users to buy and
            sell pre-owned computer hardware seamlessly.
          </p>
        </div>

        {/* Work Experience Part */}
        <header className="my-8 flex flex-col gap-1">
          <h1 className="text-4xl md:text-5xl text-primary tracking-tight">
            Work Experience
          </h1>
        </header>

        <div className="prose md:prose-base lg:prose-lg">
          <h2>Minerta Technology Co, Ltd. — Full-Stack Intern</h2>
          <p>No information yet.</p>
        </div>
      </article>

      <div className="mb-8 flex flex-col gap-1">
        <Footer />
      </div>
    </>
  );
}
