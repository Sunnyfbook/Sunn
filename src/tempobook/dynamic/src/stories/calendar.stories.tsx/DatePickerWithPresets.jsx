
            import { DatePickerWithPresets } from "./../../../../../stories/calendar.stories.tsx";

            const TempoComponent = () => {
              return DatePickerWithPresets.render(DatePickerWithPresets.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;