import React from "react";
import PrivacyPolicyPdf from "../../assets/privacy_policy.pdf";

export default function PrivacyPolicy() {
  return (
    <div className="h-screen bg-background">
      <iframe src={PrivacyPolicyPdf} width="100%" height="100%" />
    </div>
  );
}
