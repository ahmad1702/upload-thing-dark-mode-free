import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";

const ModeToggle = (props: ButtonProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button {...props}>
          Toggle Dark Mode <MoonIcon className="ml-2 h-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Invest in the movement
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            So, it turns out implementing dark mode is hard. Invest in the
            movement against evil, and I will implement it soon. Trust me bro.
            Invest against Theo. Give us some money
          </AlertDialogDescription>
          <h2 className="text-xl font-bold">Pricing</h2>
          <div className="flex gap-2">
            <div className="h-64 w-1/2 rounded-xl border p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">Free Plan</h4>
                <h4 className="text-lg font-bold">$0</h4>
              </div>
              <ul className="mt-4 list-disc pl-4">
                <li className="">Normal Styling</li>
                <li className="">Part of a good cause</li>
                <li className="">Not completely a pleb</li>
              </ul>
            </div>
            <div className="h-64 w-1/2 cursor-pointer rounded-xl border p-4 duration-300 hover:border-foreground hover:bg-muted">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">100gb Ass Plan</h4>
                <h4 className="text-lg font-bold">$10</h4>
              </div>
              <ul className="mt-4 list-disc pl-4">
                <li className="">Everything from free plan</li>
                <li className="font-semibold">
                  100gb worth of Dark Mode CSS files
                </li>
                <li className="">Really Part of a good cause</li>
                <li className="">Not at all a pleb</li>
              </ul>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a href="https://checkout.stripe.com/c/pay/cs_live_b1xzfhXkAVRa2DFOItnpSoOl6dly47vxDKyWZtTvYyxJOFvOoYS7zmp6Mu#fid2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2R1bE5gfCc%2FJ3VuWmlsc2BaMDRLNjd1bUcxbFc9a2pMYlE8aUdBSmc0UERDSUtkU3dgfF9mT3V1Tzd8MDFBZGkwNU5XTjVVUG1TX1c2ZzBAVF9wX1AzZE5OMEdHfUNkQkZ1bkhHajxLNWI1NWsxQHZfa2ZoJyknY3dqaFZgd3Ngdyc%2FcXdwYCknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl">
              Upgrade Plan
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModeToggle;
