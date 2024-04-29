// import { createClient } from 'next-sanity';
import { createClient } from 'next-sanity';
export const client = createClient({
  projectId: '1xewpngh',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: 'true',
});
