
            import { Default } from "./../../../../../stories/textarea.stories.tsx";

            const TempoComponent = () => {
              return Default.render(Default.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;