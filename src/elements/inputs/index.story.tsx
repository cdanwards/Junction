import { storiesOf } from "@kadira/storybook";

import Input from "./index.tsx";

const story = storiesOf("Inputs", module);

story.add(
  "Basic Input",
  () => (
    <Input className="one-whole center-text" />
  )
);
