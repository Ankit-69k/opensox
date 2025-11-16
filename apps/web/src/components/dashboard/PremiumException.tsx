import React from "react";
import { Crown, Lock } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";

function PremiumException() {
  return (
    <div className="w-full flex items-center h-screen justify-center  px-6">
      <Card className="max-w-md w-full bg-[#15161a] border border-[#1a1a1d] p-6 rounded-xl relative overflow-hidden text-center shadow-lg">
        {/* Accent Glow */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-ox-purple/10 rounded-full blur-3xl -ml-20 -mt-16" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-ox-purple/10 rounded-full blur-3xl -mr-20 -mb-16" />

        <CardHeader>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-[#1a1a1d] border border-[#242529] rounded-full">
              <Crown className="w-7 h-7 text-ox-purple" />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Premium Feature
            </h2>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-zinc-400 leading-relaxed">
            This newsletter is exclusive to premium members. Unlock expert
            insights, early access content, and much more.
          </p>

          <Link
            href="/pricing"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-ox-purple hover:bg-ox-purple/80 transition rounded-lg font-semibold text-white shadow-md text-sm"
          >
            Upgrade to Premium
            <Lock className="w-4 h-4" />
          </Link>

          <p className="text-xs text-gray-500">
            Already subscribed?{" "}
            <Link href="/account" className="text-ox-purple underline">
              Manage subscription
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default PremiumException;
