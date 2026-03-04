### What is JSX, and why is it used?

JSX এর পূর্ণরূপ হলো JavaScript XML। এটি React-এ UI (User Interface) তৈরির জন্য ব্যবহৃত একটি সিনট্যাক্স এক্সটেনশন, যা দেখতে অনেকটা HTML-এর মতো।

JSX জাভাস্ক্রিপ্ট ফাইলের ভেতরে HTML-এর মতো করে কোড লেখার যায়।

### What is the difference between State and Props?

Props: Props হলো component-এর external data যা parent component থেকে child component-এ পাঠানো হয়। এটি পরির্বতন করা যায় না। Component এ শুধু এই গুলো ব্যবহার করা যায়।
Paranet component থেকে child component ব্যবহার করার জন্য তৈরি করা হয়।

State: State হলো component-এর internal data যা component নিজের মধ্যে manage করে। State পরিবর্তন করা যায়। এবং যখন state update হয়, component আবার re-render হয়। Component-এর dynamic behavior বা interactive UI তৈরি করার জন্য ব্যবহৃত হয়।

### What is the useState hook, and how does it work?

useState হলো React-এর একটি Hook যা functional component-এ state ব্যবহার করার জন্য ব্যবহৃত হয়।
1: Component প্রথমবার render হয়
2: UI তে value দেখানো হয়
3: State Update করা হয়

### How can you share state between components in React?

যে component-গুলোর মধ্যে state share করতে হবে, তাদের common parent component-এ state রাখতে হবে।
Parent → child-এ data পাঠাবে (props দিয়ে)
Child → parent-এ update পাঠাবে (function দিয়ে)

### How is event handling done in React?

React-এ event handling করা হয়:

JSX-এর মাধ্যমে,
JavaScript function ব্যবহার করে,
CamelCase event name দিয়ে

