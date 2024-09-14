
            import { Open } from "./../../../../../stories/collapsible.stories.tsx";

            const TempoComponent = () => {
              return Open.render(Open.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;