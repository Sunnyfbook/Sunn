
            import { Bottom } from "./../../../../../stories/sheet.stories.tsx";

            const TempoComponent = () => {
              return Bottom.render(Bottom.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;