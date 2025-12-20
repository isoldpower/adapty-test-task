"use client"

import { useState } from "react"
import { Card } from "@shared/ui-toolkit/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui-toolkit/tabs"
import { CodeBlock } from "@shared/ui-toolkit/code-block"

const CODE_EXAMPLES = {
  ios: `import PaywallSDK

// Initialize SDK
PaywallSDK.configure(apiKey: "your_api_key")

// Present paywall
PaywallSDK.presentPaywall(
  placement: "onboarding"
) { result in
  switch result {
  case .purchased(let product):
    print("Success: \\(product.id)")
  case .cancelled:
    print("User cancelled")
  }
}`,
  android: `import com.paywallsdk.PaywallSDK

// Initialize SDK
PaywallSDK.configure(apiKey = "your_api_key")

// Present paywall
PaywallSDK.presentPaywall(
  placement = "onboarding",
  callback = { result ->
    when (result) {
      is Purchased -> println("Success: \${result.product.id}")
      is Cancelled -> println("User cancelled")
    }
  }
)`,
  reactnative: `import PaywallSDK from '@paywallsdk/react-native';

// Initialize SDK
await PaywallSDK.configure({ apiKey: 'your_api_key' });

// Present paywall
const result = await PaywallSDK.presentPaywall({
  placement: 'onboarding',
});

if (result.purchased) {
  console.log('Success:', result.product.id);
}`,
  flutter: `import 'package:paywall_sdk/paywall_sdk.dart';

// Initialize SDK
await PaywallSDK.configure(apiKey: 'your_api_key');

// Present paywall
final result = await PaywallSDK.presentPaywall(
  placement: 'onboarding',
);

if (result.purchased) {
  print('Success: \${result.product.id}');
}`,
  web: `import { PaywallSDK } from '@paywallsdk/web';

// Initialize SDK
PaywallSDK.configure({ apiKey: 'your_api_key' });

// Present paywall
const result = await PaywallSDK.presentPaywall({
  placement: 'onboarding',
});

if (result.purchased) {
  console.log('Success:', result.product.id);
}`,
}

export function SdkCodeViewer() {
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof CODE_EXAMPLES>("ios")

  return (
    <Card className="overflow-hidden border-2">
      <Tabs
        value={selectedPlatform}
        onValueChange={(value) => setSelectedPlatform(value as keyof typeof CODE_EXAMPLES)}
      >
        <TabsList className="w-full justify-start rounded-none border-b bg-muted/30 p-0">
          <TabsTrigger value="ios" className="rounded-none data-[state=active]:bg-background">
            iOS
          </TabsTrigger>
          <TabsTrigger value="android" className="rounded-none data-[state=active]:bg-background">
            Android
          </TabsTrigger>
          <TabsTrigger value="reactnative" className="rounded-none data-[state=active]:bg-background">
            React Native
          </TabsTrigger>
          <TabsTrigger value="flutter" className="rounded-none data-[state=active]:bg-background">
            Flutter
          </TabsTrigger>
          <TabsTrigger value="web" className="rounded-none data-[state=active]:bg-background">
            Web
          </TabsTrigger>
        </TabsList>
        {Object.entries(CODE_EXAMPLES).map(([platform, code]) => (
          <TabsContent key={platform} value={platform} className="m-0">
            <CodeBlock
              code={code}
              language={platform === "ios" ? "swift" : platform === "android" ? "kotlin" : "typescript"}
            />
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  )
}
