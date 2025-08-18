using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tipo_Datos.Data;
using Tipo_Datos.Models.Entidades;

namespace Tipo_Datos.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppClientesController : ControllerBase
    {

        private readonly DatosDbContext _dbContext;
        public AppClientesController(DatosDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet("listar")]
        public async Task<ActionResult<IEnumerable<ClientesModel>>> ListarCliente()
        {
            var clientes = await _dbContext.Clientes.ToListAsync();
            return Ok(clientes);
        }


    }
}
