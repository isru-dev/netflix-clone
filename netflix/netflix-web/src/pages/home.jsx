import { Header } from "../components/header";
import { Fotter } from '../components/fotter'
import { Banner } from "../components/banner";
import { Rowlist } from "../components/Rowlist";
export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Fotter />
    </>
  );
}