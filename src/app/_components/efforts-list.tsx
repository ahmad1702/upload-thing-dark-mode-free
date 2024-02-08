import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EffortsList() {
  return (
    <div className="grid w-full grid-cols-2">
      <div className="p-1">
        <Card>
          <CardHeader>
            <CardTitle>
              <a
                className="text-foreground underline"
                href="https://arc.net/boost/F9055A22-88AD-4C78-A445-BB52D917E4EC"
                target="_blank"
              >
                Arc Boost
              </a>
            </CardTitle>
            <CardDescription>
              If you{"'"}re using Arc Browser, like the soy dev you are, add
              <a
                className="text-foreground "
                href="https://arc.net/boost/F9055A22-88AD-4C78-A445-BB52D917E4EC"
                target="_blank"
              >
                this boost
              </a>{" "}
              to get dark and dirty.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="p-1">
        <Card>
          <CardHeader>
            <CardTitle>
              <a
                className="text-foreground underline"
                href="https://github.com/ronanru/uploadthing-darkmode"
                target="_blank"
              >
                Chrome Extension
              </a>
            </CardTitle>
            <CardDescription>
              A wise a quick hunter,{" "}
              <a
                className="text-foreground underline"
                href="https://github.com/ronanru"
                target="_blank"
              >
                @ronanru
              </a>{" "}
              hunted down a browser solution in which you can add dark mode via
              a chrome extension.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
