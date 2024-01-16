import { Button } from "@/components/ui/button";
import useWriteContract from "@/hooks/useWriteContract";
import { useState } from "react";

interface EnterRumbleProps {
  rumbleId: number;
  entryFee: string; // Ajoutez cette ligne si `entryFee` est requis
}

export default function EnterRumble({ rumbleId, entryFee }: EnterRumbleProps) {
  const { loading, error, execute } = useWriteContract();
  const [submitting, setSubmitting] = useState(false);

  const handleEnterRumble = async () => {
    try {
      setSubmitting(true);
      await execute("enterRumbleETH", [rumbleId], entryFee);
      setSubmitting(false);
    } catch (err) {
      setSubmitting(false);
    }
  };

  if (loading || submitting) {
    return <div>Loading...</div>;
  }
  return (
    <Button
      onClick={handleEnterRumble}
      className="bg-blue-500 w-full text-md rounded-b-none hover:bg-white hover:text-black"
    >
      Enter Now
    </Button>
  );
}
