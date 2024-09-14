
            import { Large } from "./../../../../../stories/toggle.stories.tsx";

            const TempoComponent = () => {
              return Large.render(Large.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;