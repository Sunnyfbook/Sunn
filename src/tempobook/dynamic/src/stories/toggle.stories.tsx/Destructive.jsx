
            import { Destructive } from "./../../../../../stories/toggle.stories.tsx";

            const TempoComponent = () => {
              return Destructive.render(Destructive.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;