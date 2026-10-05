/* Conclusión al pie de la lámina: la lectura del dato en una frase, dentro
   de la banda crema con filete amarillo. El rótulo "Conclusión" la separa
   del resto de la lámina para que se encuentre de un vistazo. */
export default function Conclusion({ children }) {
  return (
    <div className="banda-nota">
      <div className="etiqueta-nota">Conclusión</div>
      <div className="nota">{children}</div>
    </div>
  )
}
