import { storiesOf } from "@kadira/storybook";

import Icon, {
  IconFilled,
  IconAlert,
  IconBase,
  IconOutlined,
} from "./index.tsx";
import icons from "./fa.tsx";

const story = storiesOf("Icons", module);

story.addWithInfo(
  "Unfilled",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      {icons.map((icon) => (
        <Icon className={icon} />
      ))}
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Filled",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      {icons.map((icon) => (
        <IconFilled className={icon} />
      ))}
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Alert",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      {icons.map((icon) => (
        <IconAlert className={icon} />
      ))}
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Base (white)",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      {icons.map((icon) => (
        <IconBase className={icon} />
      ))}
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Outlined",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      {icons.map((icon) => (
        <IconOutlined className={icon} />
      ))}
    </div>
  ),
  { propTables: false }
);
