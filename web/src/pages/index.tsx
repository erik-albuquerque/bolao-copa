import { GetServerSideProps } from "next";

type HomeProps = {
  count: number;
};

export default function Home(props: HomeProps) {
  return <h1 className="text-violet-500">Home {props.count}</h1>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  console.log(data);

  return {
    props: {
      count: data.count,
    },
  };
};
