
            import { WithLabel } from "./../../../../../stories/textarea.stories.tsx";

            const TempoComponent = () => {
              return WithLabel.render(WithLabel.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;