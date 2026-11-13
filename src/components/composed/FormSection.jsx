// Extracted from local content; copy, links and visual variants arrive through props.


export default function FormSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <div {...content.divProps3}>
            {content.divSpace3}
            <div {...content.divProps4}>
              {content.divSpace4}
              <h2 {...content.h2Props}>
                {content.h2Space}
                {content.heading}
                {content.h2Space2}
              </h2>
              {content.divSpace5}
              <p {...content.pProps}>
                {content.pSpace}
                {content.description}
                {content.pSpace2}
              </p>
              {content.divSpace6}
            </div>
            {content.divSpace7}
            <form {...content.formProps}>
              {content.formSpace}
              <div {...content.divProps5}>
                {content.divSpace8}
                <label {...content.labelProps}>
                  {content.labelSpace}
                  {content.text}
                  {content.labelSpace2}
                </label>
                {content.divSpace9}
                <input {...content.inputProps} />
                {content.divSpace10}
                <span {...content.spanProps}>
                  {content.spanSpace}
                </span>
                {content.divSpace11}
              </div>
              {content.formSpace2}
              <div {...content.divProps6}>
                {content.divSpace12}
                <label {...content.labelProps2}>
                  {content.labelSpace3}
                  {content.text2}
                  {content.labelSpace4}
                </label>
                {content.divSpace13}
                <input {...content.inputProps2} />
                {content.divSpace14}
                <span {...content.spanProps2}>
                  {content.spanSpace2}
                </span>
                {content.divSpace15}
              </div>
              {content.formSpace3}
              <div {...content.divProps7}>
                {content.divSpace16}
                <label {...content.labelProps3}>
                  {content.labelSpace5}
                  {content.text3}
                  {content.labelSpace6}
                </label>
                {content.divSpace17}
                <input {...content.inputProps3} />
                {content.divSpace18}
                <span {...content.spanProps3}>
                  {content.spanSpace3}
                </span>
                {content.divSpace19}
              </div>
              {content.formSpace4}
              <div {...content.divProps8}>
                {content.divSpace20}
                <label {...content.labelProps4}>
                  {content.labelSpace7}
                  {content.text4}
                  {content.labelSpace8}
                  <span {...content.spanProps4}>
                    {content.spanSpace4}
                    {content.label}
                    {content.spanSpace5}
                  </span>
                  {content.labelSpace9}
                </label>
                {content.divSpace21}
                <input {...content.inputProps4} />
                {content.divSpace22}
              </div>
              {content.formSpace5}
              <fieldset {...content.fieldsetProps}>
                {content.fieldsetSpace}
                <legend {...content.legendProps}>
                  {content.legendSpace}
                  {content.text5}
                  {content.legendSpace2}
                  <span {...content.spanProps5}>
                    {content.spanSpace6}
                    {content.label2}
                    {content.spanSpace7}
                  </span>
                  {content.legendSpace3}
                </legend>
                {content.fieldsetSpace2}
                <div {...content.divProps9}>
                  {content.divSpace23}
                  <label {...content.labelProps5}>
                    {content.labelSpace10}
                    <input {...content.inputProps5} />
                    {content.labelSpace11}
                    <span {...content.spanProps6}>
                      {content.spanSpace8}
                      {content.label3}
                      {content.spanSpace9}
                    </span>
                    {content.labelSpace12}
                  </label>
                  {content.divSpace24}
                  <label {...content.labelProps6}>
                    {content.labelSpace13}
                    <input {...content.inputProps6} />
                    {content.labelSpace14}
                    <span {...content.spanProps7}>
                      {content.spanSpace10}
                      {content.label4}
                      {content.spanSpace11}
                    </span>
                    {content.labelSpace15}
                  </label>
                  {content.divSpace25}
                  <label {...content.labelProps7}>
                    {content.labelSpace16}
                    <input {...content.inputProps7} />
                    {content.labelSpace17}
                    <span {...content.spanProps8}>
                      {content.spanSpace12}
                      {content.label5}
                      {content.spanSpace13}
                    </span>
                    {content.labelSpace18}
                  </label>
                  {content.divSpace26}
                  <label {...content.labelProps8}>
                    {content.labelSpace19}
                    <input {...content.inputProps8} />
                    {content.labelSpace20}
                    <span {...content.spanProps9}>
                      {content.spanSpace14}
                      {content.label6}
                      {content.spanSpace15}
                    </span>
                    {content.labelSpace21}
                  </label>
                  {content.divSpace27}
                </div>
                {content.fieldsetSpace3}
              </fieldset>
              {content.formSpace6}
              <fieldset {...content.fieldsetProps2}>
                {content.fieldsetSpace4}
                <legend {...content.legendProps2}>
                  {content.legendSpace4}
                  {content.text6}
                  {content.legendSpace5}
                  <span {...content.spanProps10}>
                    {content.spanSpace16}
                    {content.label7}
                    {content.spanSpace17}
                  </span>
                  {content.legendSpace6}
                </legend>
                {content.fieldsetSpace5}
                <div {...content.divProps10}>
                  {content.divSpace28}
                  <label {...content.labelProps9}>
                    {content.labelSpace22}
                    <input {...content.inputProps9} />
                    {content.labelSpace23}
                    <span {...content.spanProps11}>
                      {content.spanSpace18}
                      {content.label8}
                      {content.spanSpace19}
                    </span>
                    {content.labelSpace24}
                  </label>
                  {content.divSpace29}
                  <label {...content.labelProps10}>
                    {content.labelSpace25}
                    <input {...content.inputProps10} />
                    {content.labelSpace26}
                    <span {...content.spanProps12}>
                      {content.spanSpace20}
                      {content.label9}
                      {content.spanSpace21}
                    </span>
                    {content.labelSpace27}
                  </label>
                  {content.divSpace30}
                  <label {...content.labelProps11}>
                    {content.labelSpace28}
                    <input {...content.inputProps11} />
                    {content.labelSpace29}
                    <span {...content.spanProps13}>
                      {content.spanSpace22}
                      {content.label10}
                      {content.spanSpace23}
                    </span>
                    {content.labelSpace30}
                  </label>
                  {content.divSpace31}
                  <label {...content.labelProps12}>
                    {content.labelSpace31}
                    <input {...content.inputProps12} />
                    {content.labelSpace32}
                    <span {...content.spanProps14}>
                      {content.spanSpace24}
                      {content.label11}
                      {content.spanSpace25}
                    </span>
                    {content.labelSpace33}
                  </label>
                  {content.divSpace32}
                  <label {...content.labelProps13}>
                    {content.labelSpace34}
                    <input {...content.inputProps13} />
                    {content.labelSpace35}
                    <span {...content.spanProps15}>
                      {content.spanSpace26}
                      {content.label12}
                      {content.spanSpace27}
                    </span>
                    {content.labelSpace36}
                  </label>
                  {content.divSpace33}
                </div>
                {content.fieldsetSpace6}
              </fieldset>
              {content.formSpace7}
              <div {...content.divProps11}>
                {content.divSpace34}
                <label {...content.labelProps14}>
                  {content.labelSpace37}
                  {content.text7}
                  {content.labelSpace38}
                  <span {...content.spanProps16}>
                    {content.spanSpace28}
                    {content.label13}
                    {content.spanSpace29}
                  </span>
                  {content.labelSpace39}
                </label>
                {content.divSpace35}
                <textarea {...content.textareaProps}>
                  {content.textareaSpace}
                </textarea>
                {content.divSpace36}
              </div>
              {content.formSpace8}
              <label {...content.labelProps15}>
                {content.labelSpace40}
                <input {...content.inputProps14} />
                {content.labelSpace41}
                <span {...content.spanProps17}>
                  {content.spanSpace30}
                  {content.label14}
                  {content.spanSpace31}
                  <a {...content.aProps}>
                    {content.aSpace}
                    {content.linkLabel}
                    {content.aSpace2}
                  </a>
                  {content.spanSpace32}
                  {content.label15}
                  {content.spanSpace33}
                  <a {...content.aProps2}>
                    {content.aSpace3}
                    {content.linkLabel2}
                    {content.aSpace4}
                  </a>
                  {content.spanSpace34}
                  {content.label16}
                  {content.spanSpace35}
                </span>
                {content.labelSpace42}
              </label>
              {content.formSpace9}
              <div {...content.divProps12}>
                {content.divSpace37}
                <div {...content.divProps13}>
                  {content.divSpace38}
                  <button {...content.buttonProps}>
                    {content.buttonSpace}
                    {content.buttonLabel}
                    {content.buttonSpace2}
                    <svg {...content.svgProps}>
                      {content.svgSpace}
                      <path {...content.pathProps}>
                        {content.pathSpace}
                      </path>
                      {content.svgSpace2}
                    </svg>
                    {content.buttonSpace3}
                  </button>
                  {content.divSpace39}
                </div>
                {content.divSpace40}
                <p {...content.pProps2}>
                  {content.pSpace3}
                  {content.description2}
                  {content.pSpace4}
                </p>
                {content.divSpace41}
              </div>
              {content.formSpace10}
            </form>
            {content.divSpace42}
            <div {...content.divProps14}>
              {content.divSpace43}
              <h3 {...content.h3Props}>
                {content.h3Space}
                {content.cardTitle}
                {content.h3Space2}
              </h3>
              {content.divSpace44}
              <p {...content.pProps3}>
                {content.pSpace5}
                {content.description3}
                {content.pSpace6}
              </p>
              {content.divSpace45}
              <div {...content.divProps15}>
                {content.divSpace46}
                <button {...content.buttonProps2}>
                  {content.buttonSpace4}
                  {content.buttonLabel2}
                  {content.buttonSpace5}
                </button>
                {content.divSpace47}
              </div>
              {content.divSpace48}
            </div>
            {content.divSpace49}
          </div>
          {content.divSpace50}
          <aside {...content.asideProps}>
            {content.asideSpace}
            <h2 {...content.h2Props2}>
              {content.h2Space3}
              {content.heading2}
              {content.h2Space4}
            </h2>
            {content.asideSpace2}
            <p {...content.pProps4}>
              {content.pSpace7}
              {content.description4}
              {content.pSpace8}
            </p>
            {content.asideSpace3}
            <div {...content.divProps16}>
              {content.divSpace51}
              <div {...content.divProps17}>
                {content.divSpace52}
                <span {...content.spanProps18}>
                  {content.spanSpace36}
                  <svg {...content.svgProps2}>
                    {content.svgSpace3}
                    <path {...content.pathProps2}>
                      {content.pathSpace2}
                    </path>
                    {content.svgSpace4}
                  </svg>
                  {content.spanSpace37}
                </span>
                {content.divSpace53}
                <div {...content.divProps18}>
                  {content.divSpace54}
                  <b {...content.bProps}>
                    {content.bSpace}
                    {content.label17}
                    {content.bSpace2}
                  </b>
                  {content.divSpace55}
                  <span {...content.spanProps19}>
                    {content.spanSpace38}
                    {content.label18}
                    {content.spanSpace39}
                  </span>
                  {content.divSpace56}
                </div>
                {content.divSpace57}
              </div>
              {content.divSpace58}
              <div {...content.divProps19}>
                {content.divSpace59}
                <span {...content.spanProps20}>
                  {content.spanSpace40}
                  <svg {...content.svgProps3}>
                    {content.svgSpace5}
                    <path {...content.pathProps3}>
                      {content.pathSpace3}
                    </path>
                    {content.svgSpace6}
                  </svg>
                  {content.spanSpace41}
                </span>
                {content.divSpace60}
                <div {...content.divProps20}>
                  {content.divSpace61}
                  <b {...content.bProps2}>
                    {content.bSpace3}
                    {content.label19}
                    {content.bSpace4}
                  </b>
                  {content.divSpace62}
                  <span {...content.spanProps21}>
                    {content.spanSpace42}
                    {content.label20}
                    {content.spanSpace43}
                  </span>
                  {content.divSpace63}
                </div>
                {content.divSpace64}
              </div>
              {content.divSpace65}
              <div {...content.divProps21}>
                {content.divSpace66}
                <span {...content.spanProps22}>
                  {content.spanSpace44}
                  <svg {...content.svgProps4}>
                    {content.svgSpace7}
                    <path {...content.pathProps4}>
                      {content.pathSpace4}
                    </path>
                    {content.svgSpace8}
                  </svg>
                  {content.spanSpace45}
                </span>
                {content.divSpace67}
                <div {...content.divProps22}>
                  {content.divSpace68}
                  <b {...content.bProps3}>
                    {content.bSpace5}
                    {content.label21}
                    {content.bSpace6}
                  </b>
                  {content.divSpace69}
                  <span {...content.spanProps23}>
                    {content.spanSpace46}
                    {content.label22}
                    {content.spanSpace47}
                  </span>
                  {content.divSpace70}
                </div>
                {content.divSpace71}
              </div>
              {content.divSpace72}
              <div {...content.divProps23}>
                {content.divSpace73}
                <span {...content.spanProps24}>
                  {content.spanSpace48}
                  <svg {...content.svgProps5}>
                    {content.svgSpace9}
                    <path {...content.pathProps5}>
                      {content.pathSpace5}
                    </path>
                    {content.svgSpace10}
                  </svg>
                  {content.spanSpace49}
                </span>
                {content.divSpace74}
                <div {...content.divProps24}>
                  {content.divSpace75}
                  <b {...content.bProps4}>
                    {content.bSpace7}
                    {content.label23}
                    {content.bSpace8}
                  </b>
                  {content.divSpace76}
                  <span {...content.spanProps25}>
                    {content.spanSpace50}
                    {content.label24}
                    {content.spanSpace51}
                  </span>
                  {content.divSpace77}
                </div>
                {content.divSpace78}
              </div>
              {content.divSpace79}
            </div>
            {content.asideSpace4}
          </aside>
          {content.divSpace80}
        </div>
        {content.divSpace81}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
