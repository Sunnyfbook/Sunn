
            import { Small } from "./../../../../../stories/toggle.stories.tsx";

            const TempoComponent = () => {
              return Small.render(Small.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;