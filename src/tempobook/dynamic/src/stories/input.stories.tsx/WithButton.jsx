
            import { WithButton } from "./../../../../../stories/input.stories.tsx";

            const TempoComponent = () => {
              return WithButton.render(WithButton.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;