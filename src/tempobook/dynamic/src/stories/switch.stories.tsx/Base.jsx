
            import { Base } from "./../../../../../stories/switch.stories.tsx";

            const TempoComponent = () => {
              return Base.render(Base.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;