"use client";

import Header from "@/components/header";

export default function ProfilePage() {

    return (
        <>
            <Header />
            <section className="bg-ct-blue-600  min-h-screen pt-20">
                <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
                    <div>
                        <p className="mb-3 text-5xl text-center font-semibold">
                            Sample Pubic Page
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
