import Head from 'next/head';
import Link from '@components/link';
import QuotationMark from '@components/quotation-mark';

const Index = () => {
  return (
    <main className="p-8 box-border relative min-h-full md:p-11">
      <Head>
        <title>Cody site</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="Building something new. Previously Head of Product at Vercel." />
        <meta name="twitter:site" content="@notquiteleo" />
        <meta name="twitter:creator" content="@notquiteleo" />

        <link rel="icon" href="/initials.svg" />
      </Head>

      <section className="md:absolute md:inset-0 md:text-center md:flex md:h-full md:items-center md:justify-center md:select-none md:cursor-default">
        <h2 className="text-2xl hidden md:inline-block md:font-light md:mt-2 md:mr-10 md:ml-0 md:mb-0">
          Just call me
        </h2>

        <h1 className="text-6xl font-light m-0 absolute top-9 left-9 pr-9 md:relative md:inline-block md:left-auto md:top-auto md:pr-0 md:font-light md:text-7xl">
          <QuotationMark position="left" />
          Cody
          <QuotationMark position="right" />
        </h1>
      </section>

      <nav className="absolute left-7 flex flex-col md:left-8 md:right-8 md:flex-row md:justify-center thin:hidden">
        <Link href="https://sosowei.com">Mission</Link>
        <Link>Thoughts</Link>
        <Link href="https://github.com/vipway">Code</Link>
        {/* <Link href="https://dribbble.com/notquiteleo">Visuals</Link> */}
        <Link toggleEmail>Contact</Link>
      </nav>
      <nav className="absolute left-7 bottom-7 flex flex-col md:left-8 md:right-8 md:bottom-8 md:flex-row md:justify-center thin:hidden">
        <a href="https://beian.miit.gov.cn/" target="_blank">
          粤ICP备18146353号-1
        </a>
      </nav>
    </main>
  );
};

export default Index;
