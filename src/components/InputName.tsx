"use client";
import useSWR from "swr";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

export default function InputName() {
  const { data } = useSWR("/api/gethi", fetcher);
  return data && <div>{data.msg}</div>;
}
