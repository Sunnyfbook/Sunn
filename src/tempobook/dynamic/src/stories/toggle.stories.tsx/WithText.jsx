
            import { WithText } from "./../../../../../stories/toggle.stories.tsx";

            const TempoComponent = () => {
              return WithText.render(WithText.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;