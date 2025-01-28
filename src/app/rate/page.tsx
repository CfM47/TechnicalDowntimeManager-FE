import { RatePage } from '@/components/pages/rate';
import { RateQuery } from '@/types/rate';

/**
 * Asynchronous function component that renders the `RatePage` component.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a `RateQuery` object.
 *
 * @returns A JSX element that renders the `RatePage` component with the resolved `searchParams`.
 */
export default async function ValoracionesPage(props: { searchParams?: Promise<RateQuery> }) {
  const searchParams = await props.searchParams;
  return <RatePage query={searchParams} />;
}
