import { notFound } from "next/navigation";
import { tricks } from "@/constants/tricks";
import { TrickDetails } from "@/components/tricks/trick-details";

export default async function TrickPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const trickData = tricks.find((t) => t.id === id);

    if (!trickData) {
        notFound();
    }

    return <TrickDetails trick={trickData} />;
}
