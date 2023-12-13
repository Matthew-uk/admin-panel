"use client";
import Layout from "./../../../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>Admin</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img alt="" className="w-6 h-6" />
          <span className="px-2">Admin</span>
        </div>
      </div>
    </Layout>
  );
}
