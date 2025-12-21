const integrationPlatformSamples = [
    {
        label: "Swift",
        language: "swift",
        code: `// Your app's code
import Adapty
 
do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
 
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    },
    {
        label: "Kotlin",
        language: "kotlin",
        code: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
\twhen (result) {
\t\tis AdaptyResult.Success -> {
\t\t\tif (result.value is AdaptyPurchaseResult.Success)
\t\t\t\t// successful purchase
\t\t}
\t\tis AdaptyResult.Error -> {
\t\t\t// handle the error
\t\t}
\t}
}`,
    },
    {
        label: "React Native",
        language: "tsx",
        code: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
\tconst profile = await adapty.makePurchase(product);
\t// successful purchase
} catch (error) {
\t// handle the error
}`,
    },
    {
        label: "Flutter",
        language: "dart",
        code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
    },
    {
        label: "Unity",
        language: "csharp",
        code: `// Your app's code
using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
\tif (error == null) {
\t\t// successful purchase
\t}
});`,
    },
];

export { integrationPlatformSamples };