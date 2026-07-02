// src/app/page.tsx (Home Page)
import { AppLayout, PageLayout, Grid, Section } from '@/components/layout';

export default function HomePage() {
  return (
    <AppLayout>
      <PageLayout title="Welcome to Zenviv" subtitle="Your social fitness ecosystem">
        <Section>
          <Grid cols={3}>
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold">Communities</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join fitness communities and connect with like-minded people.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold">Webinars</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Attend live webinars from fitness experts and influencers.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold">Merchandise</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Shop premium fitness merchandise and exclusive gear.
              </p>
            </div>
          </Grid>
        </Section>
      </PageLayout>
    </AppLayout>
  );
}