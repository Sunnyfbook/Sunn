
            import { Closed } from "./../../../../../stories/collapsible.stories.tsx";

            const TempoComponent = () => {
              return Closed.render(Closed.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;